import { Alliance } from "./implement/Alliance"
import { Status } from "./implement/Status"
import { Context } from "koishi"
import eveAPI from '..'
import { Market } from "./implement/Market"
import { Universe } from "./implement/Universe"

export class ESI {
  public alliance: Alliance
  public status: Status
  public market: Market
  public universe: Universe
  constructor(ctx: Context, cfg: eveAPI.Config) {
    this.alliance = new Alliance(ctx, cfg)
    this.status = new Status(ctx, cfg)
    this.market = new Market(ctx, cfg)
    this.universe = new Universe(ctx, cfg)
  }
}
