import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className={cn("container", "border border-red-500", "", "uppercase")}>
      <Button variant="destructive" size="sm">
        Button
      </Button>
      <h1>Typography H1</h1>
      <h2>Typography H2</h2>
      <h3>Typography H3</h3>
      <h4>Typography H4</h4>
      <h5>Typography H5</h5>
      <h6>Typography H6</h6>
    </div>
  );
}
