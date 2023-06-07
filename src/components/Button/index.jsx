
function Button({available, showMore}) {
  if (showMore) {
    return <button className="w-full px-4 py-2 text-lg border rounded-lg border-secondary text-secondary">مشاهده بیشتر</button>
  }
  else{
    return <button className={`w-full px-4 py-2 text-white rounded-lg text-lg ${available ? "bg-secondary" : "bg-platinum"}`}>انتخاب تخت</button>
  }
  
}

export default Button