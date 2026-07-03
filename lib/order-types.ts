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
