"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { formatRupiah } from "@/lib/pricing-format";

export type SalesChartPoint = { month: string; revenue: number };

function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm shadow-[0_16px_40px_-24px_rgba(20,16,15,0.35)]">
      <p className="font-medium text-ink">{label}</p>
      <p className="mt-0.5 text-ink/70">{formatRupiah(payload[0].value, "id")}</p>
    </div>
  );
}

export function SalesChart({ data }: { data: SalesChartPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
        <defs>
          <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#be1e2d" stopOpacity={0.28} />
            <stop offset="100%" stopColor="#be1e2d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e4e5" vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#808184", fontSize: 12 }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          width={64}
          tick={{ fill: "#808184", fontSize: 12 }}
          tickFormatter={(value: number) =>
            value >= 1_000_000 ? `${(value / 1_000_000).toFixed(1)}jt` : value.toLocaleString("id-ID")
          }
        />
        <Tooltip content={<ChartTooltip />} />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#be1e2d"
          strokeWidth={2}
          fill="url(#salesGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
