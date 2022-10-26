import classNames from "classnames";

type CardImage = {
  image: string;
  className: string;
};

interface Props {
  className?: string;
  cardImage: CardImage;
  cardBody: React.ReactNode;
  isHorizontal?: boolean;
  onClick?: () => void;
}

const Card = ({
  className,
  cardImage,
  cardBody,
  isHorizontal = false,
  onClick,
}: Props) => {
  return (
    <div
      className={classNames(
        className,
        { "flex-row": isHorizontal },
        { "hover:cursor-pointer hover:bg-slate-300 hover:bg-opacity-80" : onClick },
        "rounded-3xl bg-gradient-to-br from-white/10 to-[#d2d2f6] backdrop-blur-lg shadow-md",
        "flex flex-col transition"
      )}
      onClick={onClick}
    >
      <img src={cardImage.image} className={cardImage.className} alt="Card" />
      <div className="px-4 pb-4">{cardBody}</div>
    </div>
  );
};

export default Card;
