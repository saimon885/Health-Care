import ServiceSkeliton from "@/Components/Card/ServiceSkeliton";

export default function loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <ServiceSkeliton key={index} />
      ))}
    </div>
  );
}
