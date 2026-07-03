import type { PricingPlanDTO } from "./pricing-types";

export type OrderStatus = "PENDING" | "PAID" | "FAILED";

export type PaymentMethodDTO = {
  paymentMethod: string;
  paymentName: string;
  paymentImage: string;
  totalFee: string;
};

export type OrderDTO = {
  id: string;
  userId: string;
  planId: string;
  plan: PricingPlanDTO;
  merchantOrderId: string;
  amount: number;
  status: OrderStatus;
  duitkuReference: string | null;
  paymentUrl: string | null;
  paidAt: string | null;
  createdAt: string;
  updatedAt: string;
};

// Same shape as OrderDTO plus the buyer, only returned by the admin-only
// list endpoint (GET /api/orders).
export type AdminOrderDTO = OrderDTO & {
  user: { id: string; name: string; email: string };
};
