import { Context, HTTP } from "koishi"
import cfg from '.'
import { Tables } from '@koishijs/cache'

export interface c {
  ETag: boolean
  ETagTimeout: number
  localCache: boolean
  localCacheEffective: number
  localCacheTimeout: number
  comparisonOfDepthParameters: boolean
}

export class EveApiError extends Error {
  public response?: HTTP.Response
  public description?: string
  public status: number
  constructor(status: number, response?: HTTP.Response, description?: string) {
    super('HTTP Error')
    this.status = status
    this.description = description
    this.name = EveApiError.name
    this.response = response
  }
}

export interface ESIHttpInput<Q extends object = object, P extends object = object, B extends object = object, H extends object = object, U extends string = string> {
  query?: Q,
  path?: P,
  body?: B,
  headers?: H,
  url: U,
  otherOptions?: HTTP.RequestConfig
}

export abstract class methodClass {
  protected ctx: Context
  protected cfg: cfg.Config
  protected EVEOnlineSwaggerInterfaceURL = 'https://esi.evetech.net/latest'
  private thisLog: ReturnType<Context['acLogs']['createLogFunction']>
  constructor(ctx: Context, cfg: cfg.Config) {
    this.ctx = ctx
    this.cfg = cfg
    this.thisLog = this.createLogFunction(__filename, methodClass.name)
  }

  protected mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    const result = { ...obj1 } as T & U
    for (const key in obj2) {
      if (key in result) {
        if (typeof result[key] === 'object' && typeof obj2[key] === 'object') {
          if (Array.isArray(result[key]) && Array.isArray(obj2[key])) {
            result[key] = result[key].concat(obj2[key]) as (T & U)[Extract<keyof U, string>]
          } else {
            result[key] = this.mergeObjects(result[key], obj2[key])
          }
        }
      } else {
        (result as U)[key] = obj2[key]
      }
    }
    return result
  }

  protected async esiHttpWithCache(method: HTTP.Method, url: string | URL, options: HTTP.RequestConfig, user: string): Promise<HTTP.Response> {
    this.thisLog.use(this.esiHttpWithCache.name, { method, url, options: options })
    let data: Tables['esiCache']
    let cfg: c
    if (this.cfg.specialFunctions.map(f => f.name).includes(user)) {
      cfg = this.cfg.specialFunctions.find(f => f.name === user) as c
    } else {
      cfg = this.cfg as c
    }
    let cacheName: string
    if (cfg.comparisonOfDepthParameters) {
      cacheName = `${user}-${this.httpQueryAndBodyFormatString(url.toString(), options)}`
    } else {
      cacheName = user
    }
    if (cfg.ETag || cfg.localCache) {
      data = await this.ctx.cache.get('esiCache', cacheName)
      if (!(options.headers && options.headers['If-None-Match'])) {
        options.headers['If-None-Match'] = data.ETag
      }
    }
    if (cfg.localCache && cfg.localCacheEffective > (Date.now() - data.timeout)) {
      const r: HTTP.Response = {
        status: 200,
        data: data.data
      } as HTTP.Response
      return r
    }
    let response
    try {
      response = await this.ctx.http(method, url, options)
    } catch (e: unknown) {
      response = (e as HTTP.Error).response
    }
    if (response.status === 304 && data.data) {
      this.ctx.cache.set('esiCache', cacheName, {
        ETag: data.ETag,
        data: data.data,
        timeout: Date.now() + (cfg.localCacheEffective || 0)
      }, cfg.localCacheTimeout || cfg.ETagTimeout)
      response.data = data.data
      return response
    } else if (response.status === 200) {
      if (cfg.ETag || cfg.localCache) {
        this.ctx.cache.set('esiCache', cacheName, {
          ETag: response.headers['ETag'],
          data: response.data,
          timeout: Date.now() + (cfg.localCacheEffective || 0)
        }, cfg.localCacheTimeout || cfg.ETagTimeout)
      }
      return response
    } else {
      return response
    }
  }

  protected formatNumberWithCommas(num: number | string): string {
    this.thisLog.use(this.formatNumberWithCommas.name, { num })
    if (num === Infinity || num === -Infinity) return num.toString()
    const [integer, fraction] = num.toString().split(".")
    const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return fraction ? `${formattedInteger}.${fraction}` : formattedInteger
  }

  protected paramAssemble(param: object): string {
    this.thisLog.use(this.paramAssemble.name, { param })
    if (!param) return ''
    const params: string[] = []
    for (const key in param) {
      if (Object.prototype.hasOwnProperty.call(param, key)) {
        if (param[key] === undefined || param[key] === null) continue
        params.push(`${key}=${param[key]}`)
      }
    }
    if (params.length === 0) return ''
    return '?' + params.join('&')
  }

  protected analysisUrlQuery(url: string): string {
    this.thisLog.use(this.analysisUrlQuery.name, { url })
    const queryIndex = url.indexOf('?')
    if (queryIndex === -1) return ''
    return url.substring(queryIndex + 1)
  }

  protected queryStringToObject(queryString: string): { [key: string]: string } {
    this.thisLog.use(this.queryStringToObject.name, { queryString })
    if (!queryString) return {}
    if (queryString.startsWith('?')) {
      queryString = queryString.substring(1)
    }
    const params: { [key: string]: string } = {}
    const pairs = queryString.split('&')
    for (const pair of pairs) {
      const [key, value] = pair.split('=')
      if (key) {
        params[key] = decodeURIComponent(value || '')
      }
    }
    return params
  }

  protected urlQueryToObject(url: string): { [key: string]: string } {
    this.thisLog.use(this.urlQueryToObject.name, { url })
    return this.queryStringToObject(this.analysisUrlQuery(url))
  }

  protected objectFormatToString(object: object): string {
    if (!object || !Array.isArray(object)) return ''
    const strs: string[] = []
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        strs.push(`${key}:${object[key]}`)
      }
    }
    return strs.join('|')
  }

  protected httpQueryAndBodyFormatString(url: string, options: HTTP.RequestConfig): string {
    const queryStrs = this.sortObjectByKeysAndFormatToString(this.urlQueryToObject(url))
    const bodyStrs = this.sortObjectByKeysAndFormatToString(options.data)
    return `${queryStrs}-${bodyStrs}`
  }

  protected sortObjectByKeysAndFormatToString(object: { [key: string | number | symbol]: unknown }): string {
    return this.objectFormatToString(this.sortObjectByKeys(this.objectKeysAllToString(object)))
  }

  protected createLogFunction(fileName: string, name: string): ReturnType<Context['acLogs']['createLogFunction']> {
    if (this.ctx.acLogs) return this.ctx.acLogs.createLogFunction(fileName, name)
    else return {
      use: (...data: unknown[]): unknown[] => data,
      return: (...data: unknown[]): unknown[] => data,
      error: (...data: unknown[]): unknown[] => data,
      warn: (...data: unknown[]): unknown[] => data,
      info: (...data: unknown[]): unknown[] => data,
      log: (...data: unknown[]): unknown[] => data
    }
  }

  protected placeholderReplacementByObjectKeys(string: string, object: object): string {
    this.thisLog.use(this.placeholderReplacementByObjectKeys.name, { url: string, path: object })
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        string = string.replace(new RegExp(`{${key}}`, 'g'), object[key])
      }
    }
    return string
  }

  protected async ESIHttp<T extends ESIHttpInput>(method: HTTP.Method, input: T, user: string): Promise<HTTP.Response> {
    return await this.esiHttpWithCache(...this.formatEsiArgs({ ...input, method: method }), user)
  }

  protected formatEsiArgs(input: { query?: object, path?: object, body?: object, headers?: object, method: HTTP.Method, url: string, otherOptions?: HTTP.RequestConfig }): [HTTP.Method, string, HTTP.RequestConfig] {
    let option: HTTP.RequestConfig
    input.url = this.EVEOnlineSwaggerInterfaceURL + input.url
    if (input.otherOptions) {
      if (input.headers) {
        const headers = input.headers
        option = this.mergeObjects({ headers }, input.otherOptions)
      }
      if (input.body) {
        const data = input.body
        option = this.mergeObjects({ data }, option)
      }
    } else {
      if (input.headers) {
        option.headers = input.headers
      }
      if (input.body) {
        option.data = input.body
      }
    }
    const link = input.path ? this.placeholderReplacementByObjectKeys((input.url + (input.query ? this.paramAssemble(input.query) : '')), input.path) : (input.url + (input.query ? this.paramAssemble(input.query) : ''))
    return [input.method, link, option]
  }

  protected objectKeysAllToString<T>(object: { [key: string | number | symbol]: T }): { [key: string]: string } {
    const result: { [key: string]: string } = {}
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        result[key.toString()] = object[key].toString()
      }
    }
    return result
  }

  protected charOrder(char: string): number {
    if (char >= '0' && char <= '9') {
      return char.charCodeAt(0) - '0'.charCodeAt(0)
    } else if (char >= 'A' && char <= 'Z') {
      return 10 + char.charCodeAt(0) - 'A'.charCodeAt(0)
    } else if (char >= 'a' && char <= 'z') {
      return 36 + char.charCodeAt(0) - 'a'.charCodeAt(0)
    }
    return -1
  }

  protected compareKeys(a: string, b: string): number {
    let i = 0, j = 0
    while (i < a.length && j < b.length) {
      while (i < a.length && this.charOrder(a[i]) === -1) i++
      while (j < b.length && this.charOrder(b[j]) === -1) j++
      if (i >= a.length || j >= b.length) break
      const orderA = this.charOrder(a[i])
      const orderB = this.charOrder(b[j])
      if (orderA !== orderB) {
        return orderA - orderB
      }
      i++
      j++
    }
    return (i >= a.length ? 0 : 1) - (j >= b.length ? 0 : 1)
  }

  protected sortObjectByKeys<T>(object: { [key: string]: T }): { [key: string]: T } {
    const sortedKeys = Object.keys(object).sort(this.compareKeys.bind(this))
    const sortedObject: { [key: string]: T } = {}
    for (const key of sortedKeys) {
      sortedObject[key] = object[key]
    }
    return sortedObject
  }

}


export abstract class ESIExtendsClass<T extends object> extends methodClass {
  protected _log: ReturnType<Context['acLogs']['createLogFunction']>
  protected type: T
  constructor(ctx: Context, cfg: cfg.Config) {
    super(ctx, cfg)
  }

  private static async abstractESIFunction<R extends object, I extends ESIHttpInput = ESIHttpInput, T extends object = object>(user: string, data: I, method: HTTP.Method): Promise<R> {
    ((this as unknown) as ESIExtendsClass<T>)._log.use(user, data)
    const res = await ((this as unknown) as ESIExtendsClass<T>).ESIHttp<I>(method, data, user)
    if (res.status === 200) {
      ((this as unknown) as ESIExtendsClass<T>)._log.return(user, res.data, data)
      return res.data
    }
    const e = new EveApiError(res.status, res, (((this as unknown) as ESIExtendsClass<T>).type[user][res.status] || res.statusText));
    ((this as unknown) as ESIExtendsClass<T>)._log.error(user, e, data)
    throw e
  }

  protected createESIFunction<T extends object = object>(ctx: ESIExtendsClass<T>): typeof ESIExtendsClass.abstractESIFunction {
    return ESIExtendsClass.abstractESIFunction.bind(ctx)
  }
}

