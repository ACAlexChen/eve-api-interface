/**
 * @type GET
 * @description Retrieve the uptime and player counts
 *
 * @link /status/
 * @alias /dev/status/
 * @alias /legacy/status/
 * @alias /v1/status/
 * @alias /v2/status/
 *
 * EVE Server status
 * This route is cached for up to 30 seconds
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 */
export interface retrieveTheUptimeAndPlayerCounts {
  url: '/status/' | '/dev/status/' | '/legacy/status/' | '/v1/status/' | '/v2/status/'

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'Server status'
      model: {
        players: number
        server_version: string
        start_time: string
        vip?: boolean
      }
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    400: {
      description: 'Bad request'
      model: {
        error: string
      }
    }
    420: {
      description: 'Error limited'
      model: {
        error: string
      }
    }
    500: {
      description: 'Internal server error'
      model: {
        error: string
      }
    }
    503: {
      description: 'Service unavailable'
      model: {
        error: string
      }
    }
    504: {
      description: 'Gateway timeout'
      model: {
        error: string
        timeout?: number
      }
    }
  }
}
export const retrieveTheUptimeAndPlayerCounts = {
  200: 'Server status',
  304: 'Not modified',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

export interface Status {
  retrieveTheUptimeAndPlayerCounts: (query: retrieveTheUptimeAndPlayerCounts['query'], headers: retrieveTheUptimeAndPlayerCounts['headers'], url: retrieveTheUptimeAndPlayerCounts['url']) => Promise<retrieveTheUptimeAndPlayerCounts['responses'][200]['model']>
}

