const ContactInputs = () => {
return (
    <form action="" className="flex flex-col mb-[34px] ">
        <div className="flex gap-x-[25px] mb-[24px] w-full">
            <input type="text" name="" id="" placeholder="Full name" className="basis-[50%] py-[15px]  border-[1px] border-border rounded-[8px] dark:bg-darkmodebg w-[40px] duration-500"/>
            <input type="email" name="" id="" placeholder="Your email" className="basis-[50%] py-[15px] border-[1px] border-border rounded-[8px] dark:bg-darkmodebg w-[40px] duration-500"/>
        </div>
        <input type="text"  placeholder="Phone number" className="basis-[100%] mb-[24px] py-[15px]  border-[1px] border-border rounded-[8px] dark:bg-darkmodebg duration-500"/>
        <textarea name="" id="" placeholder="Message" className="basis-[100%] resize-none  py-[15px]  border-[1px] border-border rounded-[8px] min-h-[170px] dark:bg-darkmodebg duration-500"></textarea>
    </form>
)
}

export default ContactInputs