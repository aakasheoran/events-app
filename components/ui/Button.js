import Link from "next/link";

const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className="cursor-pointer bg-[#03be9f] border border-solid border-[#03be9f] rounded-md py-2 px-6 text-center shadow hover:shadow-md hover:bg-[#02afa1] active:bg-[#02afa1] hover:border-[#02afa1] active:border-[#02afa1]">{props.children}</a>
      </Link>
    )
  }
  return (
    <button className="cursor-pointer bg-[#03be9f] border border-solid border-[#03be9f] rounded-md py-2 px-6 text-center shadow hover:shadow-md hover:bg-[#02afa1] active:bg-[#02afa1] hover:border-[#02afa1] active:border-[#02afa1]" onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button;
