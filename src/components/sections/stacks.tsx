import { twMerge } from "@/lib/helpers";
import { Tool, getToolbelt } from "../../lib/toolbelt";

const ToolItem = ({tool} : {tool: Tool}) => (
  <div
    key={tool.id}
    className="flex flex-col items-center mb-4 w-[8ch] h-[8ch] text-center"
  >
    <div
      data-tool={tool.id}
      className={twMerge(
        "flex items-center justify-center text-4xl mb-3 hover:scale-125 transition-all duration-200 ease-in-out text-zinc-500",
        tool.className
      )}
    >
      {tool.icon}
    </div>
    <div className="text-center">{tool.title}</div>
  </div>
);

const Stacks: React.FC = () => {
  const [frontendStack, stylingStack, backendStack, otherStack] = [
    getToolbelt({ stack: "frontend" }),
    getToolbelt({ stack: "styling" }),
    getToolbelt({ stack: "backend" }),
    getToolbelt({ stack: "others" }),
  ];

  return (
    <div>
      <h2 className="my-4">Curious of my stack?</h2>
      <div>
        <h3>Front End Stack</h3>
        <div className="flex flex-row flex-wrap gap-4 my-4">
          {frontendStack.map((stack) => <ToolItem tool={stack} key={stack.id} />)}
        </div>
      </div>
      <div>
        <h3>Styling Stack</h3>
        <div className="flex flex-row flex-wrap gap-4 my-4">
          {stylingStack.map((stack) => <ToolItem tool={stack} key={stack.id} />)}
        </div>
      </div>
      <div>
        <h3>Back End Stack</h3>
        <div className="flex flex-row flex-wrap gap-4 my-4">
          {backendStack.map((stack) => <ToolItem tool={stack} key={stack.id} />)}
        </div>
      </div>
      <div>
        <h3>Other Stack</h3>
        <div className="flex flex-row flex-wrap gap-4 my-4">
          {otherStack.map((stack) => <ToolItem tool={stack} key={stack.id} />)}
        </div>
      </div>
    </div>
  );
};

export default Stacks;
