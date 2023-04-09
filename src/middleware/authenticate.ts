import { Request, Response, NextFunction } from "express";
import { tenants } from "../data";

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const storedTenantId = req.session.tenantId;
  const tenantId: string = req.subdomains[0];

  if (!storedTenantId || storedTenantId !== tenantId) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const targetTenant = tenants.find((t) => t.id === tenantId);
  if (!targetTenant) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  next();
}