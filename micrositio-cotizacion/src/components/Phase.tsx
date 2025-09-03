import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Card from "./Card";
import Tag from "./Tag";
import Expandable from "./Expandable";

const Phase = ({ num, title, icon: Icon, summary, deliverables, impact, success, needs }: { num: number; title: string; icon: any; summary: string; deliverables: string[]; impact: string; success: string; needs: string[] }) => (
  <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.4 }}>
    <Card className="p-6 md:p-8">
      <div className="flex items-start gap-4">
        <div className="mt-1">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center border border-indigo-100">
            <Icon className="w-6 h-6 text-indigo-600" />
          </div>
        </div>
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-3">
            <Tag>Fase {num}</Tag>
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900">{title}</h3>
          </div>
          <div className="space-y-2">
            <Expandable label="Resumen" defaultOpen>
              <p>{summary}</p>
            </Expandable>
            <Expandable label="Entregamos">
              <ul className="space-y-2">
                {deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 shrink-0 text-emerald-600" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </Expandable>
            <Expandable label="Cómo acerca esta fase a la meta">
              <p>{impact}</p>
            </Expandable>
            <Expandable label="Criterios de éxito">
              <p>{success}</p>
            </Expandable>
            <Expandable label="Qué necesitamos de ustedes">
              <ul className="list-disc pl-5 space-y-1">
                {needs.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            </Expandable>
          </div>
        </div>
      </div>
    </Card>
  </motion.div>
);

export default Phase;
