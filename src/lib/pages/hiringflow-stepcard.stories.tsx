import type { Meta, StoryObj } from "@storybook/react";
import { HiringFlowStepCard } from "./hiringflow-stepcard";
import { StaffStatus } from "@/lib/types";
import { Search, ShieldCheck, UserCheck } from "lucide-react";

const meta: Meta<typeof HiringFlowStepCard> = {
  title: "Components/HiringFlowStepCard",
  component: HiringFlowStepCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HiringFlowStepCard>;

/**
 * DEFAULT (PUBLIC) STATE
 * Demonstrates the standard Vercel-inspired card used on the landing page.
 */
export const Default: Story = {
  args: {
    stepNumber: 1,
    icon: <Search className="size-5" />,
    title: "Search for Talent",
    description: "Browse available professionals ready to work in Philadelphia.",
    viewContext: "public",
  },
};

/**
 * ADMIN STATE (PULSE ANIMATION TEST)
 * Specifically tests the "Verified Action" pulse and highlight ring 
 * used for operational oversight.
 */
export const AdminVerification: Story = {
  args: {
    stepNumber: 2,
    icon: <ShieldCheck className="size-5" />,
    title: "Review Credentials",
    description: `Manually confirm that the worker's documentation is ${StaffStatus.VERIFIED}.`,
    viewContext: "admin",
  },
};

/**
 * EMPLOYER STATE
 * Demonstrates how the card renders within a logged-in employer dashboard context.
 */
export const EmployerConfirm: Story = {
  args: {
    stepNumber: 4,
    icon: <UserCheck className="size-5" />,
    title: "Confirm Match",
    description: "Finalize the hiring request for your open shift.",
    viewContext: "employer",
  },
};