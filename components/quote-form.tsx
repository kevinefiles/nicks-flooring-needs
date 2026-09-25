"use client"

import { useState, type FormEvent, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Reveal } from "@/components/reveal"
import { site } from "@/lib/site"

const spaces = ["Garage", "Basement", "Shop or barn", "Patio or covered slab", "Commercial room"]
const finishOptions = ["Harbor flake", "Porcelain solid", "Graphite solid", "Tide metallic", "Not sure yet"]

type Fields = { name: string; city: string; phone: string; space: string; size: string; finish: string; current: string; notes: string }

const empty: Fields = { name: "", city: "", phone: "", space: "Garage", size: "", finish: "Harbor flake", current: "", notes: "" }

function buildTicket(form: Fields) {
  return [
    "Nick's Flooring Needs - epoxy quote",
    "Name: " + form.name.trim(),
    "City: " + form.city.trim(),
    "Phone: " + form.phone.trim(),
    "Space: " + form.space,
    form.size.trim() ? "Approx. size: " + form.size.trim() : "",
    "Finish: " + form.finish,
    form.current.trim() ? "Current floor: " + form.current.trim() : "",
    form.notes.trim() ? "Notes: " + form.notes.trim() : "",
    "Found you from a Facebook group.",
  ].filter(Boolean).join("\n")
}

export function QuoteForm() {
  const [form, setForm] = useState<Fields>(empty)
  const [errors, setErrors] = useState<string[]>([])
  const [ticket, setTicket] = useState("")
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)

  function update(key: keyof Fields, value: string) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next: string[] = []
    if (!form.name.trim()) next.push("Add your name.")
    if (!form.city.trim()) next.push("Add your city.")
    if (form.phone.trim().replace(/\D/g, "").length < 7) next.push("Add a phone number Nick can reach.")
    setErrors(next)
    setCopied(false)
    setCopyFailed(false)
    if (next.length === 0) setTicket(buildTicket(form))
  }

  async function copyTicket() {
    try {
      await navigator.clipboard.writeText(ticket)
      setCopied(true)
      setCopyFailed(false)
    } catch {
      setCopied(false)
      setCopyFailed(true)
    }
  }

  return (
    <section id="quote" className="pb-24 sm:pb-32">
      <div className="page-wrap grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-primary">Quote ticket</p>
          <h2 className="display mt-3 text-4xl sm:text-5xl">Write it once. Paste it where Nick will see it.</h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-secondary-foreground">The ticket is a short brief. Copy it into a Facebook message or back onto the group post with the photos.</p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li>No account. Nothing is sent to a server.</li>
            <li>Price comes after the slab is understood, not from this form.</li>
          </ul>
        </Reveal>
        <Reveal>
          {ticket ? (
            <div className="ticket" role="status">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Ready to paste</p>
              <h3 className="display mt-1 text-3xl">Your quote ticket</h3>
              <pre className="mt-4 rounded-2xl bg-background p-4 font-sans text-[15px] leading-relaxed whitespace-pre-wrap">{ticket}</pre>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button type="button" className="rounded-full" onClick={copyTicket}>{copied ? "Copied" : "Copy for Facebook"}</Button>
                <Button type="button" variant="outline" className="rounded-full bg-white" onClick={() => { setTicket(""); setCopied(false) }}>Edit details</Button>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{copyFailed ? "Select the ticket text and paste it into the Facebook thread." : "Paste it under your photos. Nick still needs pictures of the slab."}</p>
            </div>
          ) : (
            <form className="ticket" noValidate onSubmit={submit}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Job ticket</p>
              <p className="display text-2xl">Epoxy flooring</p>
              {errors.length ? <div className="my-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">{errors.map((error) => <p key={error}>{error}</p>)}</div> : null}
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Name" htmlFor="name"><Input id="name" autoComplete="name" required value={form.name} onChange={(event) => update("name", event.target.value)} /></Field>
                <Field label="City" htmlFor="city"><Input id="city" autoComplete="address-level2" required value={form.city} onChange={(event) => update("city", event.target.value)} /></Field>
                <Field label="Phone" htmlFor="phone"><Input id="phone" type="tel" autoComplete="tel" required value={form.phone} onChange={(event) => update("phone", event.target.value)} /></Field>
                <Field label="Space" htmlFor="space"><Choice id="space" value={form.space} options={spaces} onChange={(value) => update("space", value)} /></Field>
                <Field label="Approx. size" htmlFor="size"><Input id="size" placeholder="2-car garage" value={form.size} onChange={(event) => update("size", event.target.value)} /></Field>
                <Field label="Finish" htmlFor="finish"><Choice id="finish" value={form.finish} options={finishOptions} onChange={(value) => update("finish", value)} /></Field>
                <Field label="Current floor" htmlFor="current" className="sm:col-span-2"><Input id="current" placeholder="Bare concrete, old paint, oil stains" value={form.current} onChange={(event) => update("current", event.target.value)} /></Field>
                <Field label="Notes" htmlFor="notes" className="sm:col-span-2"><Textarea id="notes" rows={3} placeholder="I posted photos in the neighborhood group." value={form.notes} onChange={(event) => update("notes", event.target.value)} /></Field>
              </div>
              <Button type="submit" size="lg" className="mt-5 rounded-full px-6">Build my quote ticket</Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, htmlFor, className, children }: { label: string; htmlFor: string; className?: string; children: ReactNode }) {
  return (
    <div className={className ? "grid gap-1.5 " + className : "grid gap-1.5"}>
      <Label htmlFor={htmlFor} className="text-xs font-semibold tracking-wide text-secondary-foreground uppercase">{label}</Label>
      {children}
    </div>
  )
}

function Choice({ id, value, options, onChange }: { id: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger id={id} className="w-full bg-[#f7f9fc]"><SelectValue /></SelectTrigger>
      <SelectContent>{options.map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent>
    </Select>
  )
}
