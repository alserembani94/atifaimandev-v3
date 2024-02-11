import { useEasterEgg } from "@/hooks/useEasterEgg";
import Modal from "../Modal";
import { useLottie } from "lottie-react";
import { useEffect, useRef, useState } from "react";

const DragonDen: React.FC = ({
  
}) => {
  const { setIsOpenDen, getSequence, triggerSequence } = useEasterEgg();
  const [dragonText, setDragonText] = useState<string | null>(null);
  const [apiState, setApiState] = useState<string | null>("idle");
  const [pantun, setPantun] = useState<(string | null)[]>([]);
  const [reveal, setReveal] = useState<boolean>(false);
  const handleCloseDen = () => {
    setIsOpenDen(false);
  };

  const style = {
    height: 300,
  };

  const options = {
    animationData: require("@/animation/dragon.json"),
    loop: true,
    autoplay: true,
  };

  const getPreviousReply = () => {
    if (typeof window !== "undefined") {
      const previousReply = localStorage.getItem("user_reply");
      return previousReply;
    }

    return null;
  };

  useEffect(() => {
    const getDragonResponse = async () => {
      setApiState("loading")
      try {
        const sequence = getSequence();
        const res = await fetch(`/api/stashes?phase=${sequence}`);
        const data = await res.json();
        if (!res.ok) {
          setReveal(true);
        }
        setDragonText(data.message);
        setPantun(data.pantun);
        triggerSequence(data.phase);
      } finally {
        setApiState("idle");
      }
    }

    getDragonResponse();
  }, []);

  const { View } = useLottie(options, style);

  const getDragonReply = async (reply: string) => {
    setApiState("loading");
    try {
      const sequence = getSequence();
      const res = await fetch(`/api/stashes?phase=${sequence}&reply=${reply}`);
      const data = await res.json();
      if (!res.ok) {
        setReveal(true);
      }
      setDragonText(data.message);
      setPantun(data.pantun);
      triggerSequence(data.phase);
    } finally {
      setApiState("idle");
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // API Call
    const inputs = e.currentTarget.elements;
    const reply = inputs.namedItem("reply");
    if (reply instanceof HTMLInputElement) {
      getDragonReply(reply.value);
    }
  }
  
  return (
    <Modal onClose={handleCloseDen}>
      {View}
      {
        apiState === "loading" && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-4 bg-slate-800 text-slate-300 rounded">
              <p>Dragon take a gaze on you and thinking a wise word...</p>
            </div>
          </div>
        )
      }
      {
        apiState === "idle" && (
          <form onSubmit={handleSubmit} className="text-center p-8 flex flex-col gap-4">
            <p>{dragonText}</p>
            {
              !reveal && (
                <>
                  <code className="p-4 bg-slate-800 text-slate-300 rounded flex flex-col text-left break-words">
                    {pantun && pantun.map((pantun, index) => (
                      <span key={index} className="even:ml-6">{pantun}</span>
                    ))}
                  </code>
                  <input type="text" placeholder="Your reply" name="reply" className="p-4 bg-slate-800 text-slate-300 rounded font-mono" />
                </>
              )
            }
          </form>
        )
      }
    </Modal>
  )
};

export default DragonDen;
