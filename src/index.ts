/* eslint-disable @typescript-eslint/no-namespace */
import { Context, Schema, Service } from 'koishi'
import {} from 'koishi-plugin-ac-logs'
export { EveApiError } from './f'
import { c } from './f'
export const name = 'eve-api-interface'
import { ESI } from './esi'
import {} from '@koishijs/cache'
import { ZKillboardAPI } from './zkillboard/implement'

declare module '@koishijs/cache' {
  interface Tables {
    esiCache: {
      ETag: string
      data: unknown
      timeout: number
    }
  }
}

class eveAPI extends Service {
  private cfg: eveAPI.Config
  public esi: ESI
  public zkillboard: ZKillboardAPI
  static inject = {
    optional: [
      'acLogs',
      'cache'
    ]
  }
  constructor(ctx: Context) {
    super(ctx, 'eveAPI')
    this.cfg = ctx.config
    this.esi = new ESI(this.ctx, this.cfg)
    this.zkillboard = new ZKillboardAPI(this.ctx, this.cfg)
  }
}

interface car extends c {
  name: string
}

declare module 'koishi' {
  interface Context {
    eveAPI: eveAPI
  }
}

namespace eveAPI {

  export interface Config extends c {
    specialFunctions: car[]
  }

  export const Config: Schema<Config> = Schema.intersect([
    Schema.object({
      ETag: Schema.boolean().default(false).description('是否使用 ETag 缓存（需cache服务并且可能占用较多空间）'),
      comparisonOfDepthParameters: Schema.boolean().default(false).description('是否对深度参数进行比较，避免应参数不一致导致ETag缓存失效')
    }).description('全局配置'),
    Schema.union([
      Schema.object({
        ETag: Schema.const(true).required(),
        ETagTimeout: Schema.number().default(864000000).description('ETag缓存超时时间（毫秒）')
      }),
      Schema.object({})
    ]),
    Schema.object({
      localCache: Schema.boolean().default(false).description('是否使用本地缓存（不向ESI服务器请求数据，直接获取本地存储数据，需cache服务并且可能占用较多空间，但可能存在数据不一致问题，优先度高于ETag缓存）')
    }),
    Schema.union([
      Schema.object({
        localCache: Schema.const(true).required(),
        localCacheEffective: Schema.number().default(86400000).description('本地缓存有效时间（毫秒）'),
        localCacheTimeout: Schema.number().default(864000000).description('本地缓存超时时间（毫秒）')
      }),
      Schema.object({})
    ]),
    Schema.object({
      specialFunctions: Schema.array(Schema.intersect([
        Schema.object({
          name: Schema.string().required().description('函数名'),
          ETag: Schema.boolean().default(false).description('是否使用 ETag 缓存（需cache服务并且可能占用较多空间）'),
          comparisonOfDepthParameters: Schema.boolean().default(false).description('是否对深度参数进行比较，避免应参数不一致导致ETag缓存失效')
        }),
        Schema.union([
          Schema.object({
            ETag: Schema.const(true).required(),
            ETagTimeout: Schema.number().default(864000000).description('ETag缓存超时时间（毫秒）')
          }),
          Schema.object({})
        ]),
        Schema.object({
          localCache: Schema.boolean().default(false).description('是否使用本地缓存（不向ESI服务器请求数据，直接获取本地存储数据，需cache服务并且可能占用较多空间，但可能存在数据不一致问题，优先度高于ETag缓存）')
        }),
        Schema.union([
          Schema.object({
            localCache: Schema.const(true).required(),
            localCacheEffective: Schema.number().default(86400000).description('本地缓存有效时间（毫秒）'),
            localCacheTimeout: Schema.number().default(864000000).description('本地缓存超时时间（毫秒）')
          }),
          Schema.object({})
        ])
      ])).description('特殊函数配置')
    })
  ]) as Schema<Config>

}

export default eveAPI
