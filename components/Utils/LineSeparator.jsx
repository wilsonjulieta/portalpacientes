export default function LineSeparator({color}) {
    return <div className="border-0 border-solid w-full" style={{ borderBottomWidth: "1px", borderColor: color ?? "#d2d2d2", marginTop: "7px" }}></div>
}