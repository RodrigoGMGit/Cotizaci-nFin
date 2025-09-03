import { CheckCircle2 } from "lucide-react";
import Card from "./Card";

const EntregablesCard = ({ title, items }: { title: string; items: string[] }) => (
  <Card className="p-6">
    <h4 className="font-semibold mb-2">{title}</h4>
    <ul className="space-y-2 text-slate-700">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-600" />
          {item}
        </li>
      ))}
    </ul>
  </Card>
);

export default EntregablesCard;
