import {
  Home,
  Wrench,
  Repeat,
  Droplets,
  Thermometer,
  Grid3x3,
  Layers,
  Zap,
  Triangle,
  CloudRain,
  Square,
  Wind,
  ShieldCheck,
  Search,
  Package,
  Siren,
  type LucideIcon,
} from "lucide-react"

export const serviceIconMap: Record<string, LucideIcon> = {
  Home,
  Wrench,
  Repeat,
  Droplets,
  Thermometer,
  Grid3x3,
  Layers,
  Zap,
  Triangle,
  CloudRain,
  Square,
  Wind,
  ShieldCheck,
  Search,
  Package,
  Siren,
}

export function getServiceIcon(name: string): LucideIcon {
  return serviceIconMap[name] ?? Home
}
