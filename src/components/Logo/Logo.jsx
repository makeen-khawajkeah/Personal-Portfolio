const Logo = ({name}) => {
return (
    <h2 className="text-2xl text-semibold tracking-tighter logo ">{name[0]}<span className="text-[40px] text-blue inline-block animate-bounce">{name[1]}</span>{name[2]}</h2>
)
}
export default Logo