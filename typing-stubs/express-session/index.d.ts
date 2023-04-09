import "express-session"

declare module 'express-session' {
  export interface SessionData {
    tenantId?: string;
    email?: string;
  }
}