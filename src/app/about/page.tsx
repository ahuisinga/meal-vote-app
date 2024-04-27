export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-6 text-2xl">
        About <span className="font-bold italic text-accent">EAT!</span>
      </h1>
      <div className="flex flex-col gap-4 text-left sm:text-justify">
        <p>
          If your friend group is anything like mine, you have inevitably had
          that moment where you all are starving but no one knows wants to be
          the one to pick where to eat. Maybe hunger makes us indecisive. Maybe
          we already are indecisive people. Maybe we live in fear of picking the
          wrong restaurant and being judged for it the rest of our lives. (Just
          me? Ok.){" "}
        </p>
        <p>
          Welcome to my plan to fix the sitting around pretending to think about
          where to eat for the group. Think of this as like Kahoot for meals.
          Or, if you are more inclined, Tinder but swipe right on where you want
          to eat.
        </p>
        <p>
          <span className="font-bold italic">EAT!</span> will serve up a few
          nearby locations currently open, and you and your friends can vote on
          where to go. There is no ranking system here. It is a simple
          <span className="italic">
            &ldquo;Would I be willing to eat at this place in the next 20
            minutes, yes or no?&rdquo;
          </span>{" "}
          (And it&apos;s anonymous so no one will know if you secretly hate
          their favorite restaurant). Then, we will show you the group&apos;s
          favorites. Up to you if you want to listen to us or not.
        </p>
      </div>
    </div>
  );
}
