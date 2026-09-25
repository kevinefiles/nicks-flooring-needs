"use client"

import * as React from "react"
import { cn } from "cn"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { Select as SelectPrimitive } from "radix-ui"

function Select(props: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}
function SelectGroup(props: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}
function SelectValue(props: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}
function SelectTrigger({ className, size = "default", children, ...props }: React.ComponentProps<typeof SelectPrimitive.Trigger> & { size?: "sm" | "default" }) {
  return (
    <SelectPrimitive.Trigger data-slot="select-trigger" data-size={size} className={cn("flex w-full items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 data-[size=default]:h-9", className)} {...props}>
      {children}
      <SelectPrimitive.Icon asChild><ChevronDownIcon className="size-4 opacity-50" /></SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}
function SelectContent({ className, children, position = "item-aligned", ...props }: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content data-slot="select-content" className={cn("relative z-50 max-h-80 min-w-[8rem] overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md", className)} position={position} {...props}>
        <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}
function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return <SelectPrimitive.Label data-slot="select-label" className={cn("px-2 py-1.5 text-xs text-muted-foreground", className)} {...props} />
}
function SelectItem({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item data-slot="select-item" className={cn("relative flex w-full cursor-default items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)} {...props}>
      <span className="absolute right-2 flex size-3.5 items-center justify-center"><SelectPrimitive.ItemIndicator><CheckIcon className="size-4" /></SelectPrimitive.ItemIndicator></span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}
function SelectSeparator({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return <SelectPrimitive.Separator data-slot="select-separator" className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />
}
function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return <SelectPrimitive.ScrollUpButton data-slot="select-scroll-up-button" className={cn("flex items-center justify-center py-1", className)} {...props}><ChevronUpIcon className="size-4" /></SelectPrimitive.ScrollUpButton>
}
function SelectScrollDownButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return <SelectPrimitive.ScrollDownButton data-slot="select-scroll-down-button" className={cn("flex items-center justify-center py-1", className)} {...props}><ChevronDownIcon className="size-4" /></SelectPrimitive.ScrollDownButton>
}
export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue }
