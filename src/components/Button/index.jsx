
function Button({available, showMore}) {
  if (showMore) {
    return <button className="w-full px-1 py-2 text-sm transition-all duration-300 border rounded-lg lgr:text-base border-secondary text-secondary hover:text-secondary-dark hover:border-secondary-dark">مشاهده بیشتر</button>
  }
  else{
    return <button className={`w-full px-1 py-2 text-sm lgr:text-base text-white rounded-lg ${available ? "bg-secondary hover:bg-secondary-dark transition-all duration-200" : "bg-platinum"}`}>انتخاب تخت</button>
  }
  
}

export default Button