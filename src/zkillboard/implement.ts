import * as type from './interface'
import { Context } from 'koishi'
import { methodClass, EveApiError } from '../f'
import eveAPI from '..'


export class ZKillboardAPI extends methodClass implements type.ZKillboardAPI {
  private _log = this.ctx.acLogs?.createLogFunction(__filename, ZKillboardAPI.name)
  constructor(ctx: Context, cfg: eveAPI.Config) {
    super(ctx, cfg)
  }

  public async statistics(type: 'characterID', id: number): Promise<type.characterID>
  public async statistics(type: 'corporationID', id: number): Promise<type.corporationID>
  public async statistics(type: 'allianceID', id: number): Promise<type.allianceID>
  public async statistics(type: 'characterID' | 'corporationID' | 'allianceID', id: number): Promise<type.characterID | type.corporationID | type.allianceID> {
    this._log?.use(this.statistics.name, { type, id })
    const url = `https://zkillboard.com/api/stats/${type}/${id}/`
    const res = await this.ctx.http('GET', url)
    if (res.status === 200) {
      this._log?.return(this.statistics.name, res.data, { type, id })
      return res.data
    }
    const error: EveApiError = new EveApiError(res.status, res)
    this._log?.error(this.statistics.name, error, { type, id })
    throw error
  }

  public webSocket(callback: (ws: WebSocket) => void): () => void {
    this._log?.use(this.webSocket.name, { callback })
    const ws = this.ctx.http.ws('wss://zkillboard.com/websocket/')
    callback(ws)
    const close = this.ctx.on('dispose', () => ws.close())
    const r = () => {
      ws.close()
      close()
    }
    this._log?.return(this.webSocket.name, r)
    return r
  }

  public webSocketOnlyMessage(callback: (message: type.WebSocketMessage, close: () => void) => void): void {
    this._log?.use(this.webSocketOnlyMessage.name, { callback })
    let selfClosed = false
    const ws = this.ctx.http.ws('wss://zkillboard.com/websocket/')
    ws.addEventListener('open', () => {
      ws.send(JSON.stringify({
        action: 'sub',
        channel: 'killstream'
      }))
    })
    const close = this.ctx.on('dispose', () => ws.close())
    ws.addEventListener('close', () => {
      if (!selfClosed) this.webSocketOnlyMessage(callback)
    })
    ws.addEventListener('error', (event) => {
      this._log?.error(this.webSocketOnlyMessage.name, event, { callback })
      if (!selfClosed) this.webSocketOnlyMessage(callback)
    })
    ws.addEventListener('message', (event) => {
      const message = JSON.parse(event.data) as type.WebSocketMessage
      callback(message, () => {
        selfClosed = true
        ws.close()
        close()
      })
    })
  }
}
