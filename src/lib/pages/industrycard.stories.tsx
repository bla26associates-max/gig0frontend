import type { Meta, StoryObj } from "@storybook/react";
import { IndustryCard } from "./industry-card";
import { StaffStatus, NEW_INDUSTRY_BOILERPLATE } from "@/lib/types";
import { Stethoscope, Warehouse, ShieldAlert } from "lucide-react";

const meta: Meta<typeof IndustryCard> = {
  title: "Components/IndustryCard",
  component: IndustryCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IndustryCard>;

/**
 * DEFAULT (PUBLIC) STATE
 * Demonstrates the pre-login marketing view with "Accredited Talent" terminology.
 */
export const Default: Story = {
  args: {
    icon: <Stethoscope className="size-6" />,
    industryData: {
      ...NEW_INDUSTRY_BOILERPLATE,
      id: "1",
      name: "Healthcare",
      professionalsCount: 1250,
      trending: true,
    },
    viewContext: "public",
  },
};

/**
 * EMPLOYER STATE
 * Demonstrates the dashboard view where badges reflect talent matches.
 */
export const Employer: Story = {
  args: {
    icon: <Warehouse className="size-6" />,
    industryData: {
      ...NEW_INDUSTRY_BOILERPLATE,
      id: "2",
      name: "Logistics",
      professionalsCount: 85,
    },
    viewContext: "employer",
  },
};

/**
 * ADMIN STATE
 * Demonstrates the management view using the standardized "Pending Review" status.
 */
export const Admin: Story = {
  args: {
    icon: <ShieldAlert className="size-6" />,
    industryData: {
      ...NEW_INDUSTRY_BOILERPLATE,
      id: "3",
      name: "Regulatory",
      professionalsCount: 12,
    },
    viewContext: "admin",
  },
};