
function Button({available, showMore}) {
  if (showMore) {
    return <button className="w-full px-1 py-2 text-sm border rounded-lg lgr:text-base border-secondary text-secondary">مشاهده بیشتر</button>
  }
  else{
    return <button className={`w-full px-1 py-2 text-sm lgr:text-base text-white rounded-lg ${available ? "bg-secondary" : "bg-platinum"}`}>انتخاب تخت</button>
  }
  
}

export default Button