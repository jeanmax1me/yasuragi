import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();

  if (await isAuthenticated()) {
    return redirect("/dashboard");
  }
  return (
    <section className="flex items-center justify-center bg-background h-[90vh]">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <span className="w-auto px-6 py-3 rounded-full bg-secondary">
            <span className="text-sm font-medium text-primary">
              安らぎ (yasuragi)
            </span>
          </span>

          <h1 className="text-3xl font-extrabold lg:text-6xl text-primary mt-8">
            Means peace and tranquility.
          </h1>

          <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
            It encompasses a sense of calmness, serenity, and freedom from worry
            or agitation. However, it goes beyond just a lack of negative
            emotions. Yasuragi also suggests a feeling of contentment,
            restfulness, and inner harmony. It evokes a state of being where
            your mind and heart are at ease.
          </p>
        </div>
        <div className="flex justify-center max-w-xm mx-auto mt-10">
          <Button size="lg" max-width="sm">
            <RegisterLink>Sign up for free</RegisterLink>
          </Button>
        </div>
      </div>
    </section>
  );
}
