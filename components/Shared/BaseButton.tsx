interface BaseButtonProps {
  text: string;
  styles?: React.ComponentProps<"div">["className"];
  type: "button" | "submit" | "reset" | undefined;
}

export default function BaseButton({ text, type, styles }: BaseButtonProps) {
  return (
    <>
      <button type={type} className={`${styles} text-center`}>
        {text}
      </button>
    </>
  );
}
