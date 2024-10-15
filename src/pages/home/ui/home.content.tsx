
const HomeContent = () => {
	return (
		<div className='w-full h-[100dvh] border-[1px] flex flex-col justify-start items-center px-12'>
			<div className="w-full p-4 flex justify-between items-center">
				<p>checkout.com</p>
				<a href="">Verify later</a>
			</div>
			<img src="" alt="" className='w-[112px] h-[112px] bg-[gray]' />
			<p className='text-[24px] font-bold leading-34'>Let's verify your identity in 3 minutes</p>
			<p>Verification of your identity is necessary to finalise your application for "your company name"</p>
			<button>Start verifying</button>
			<button>English</button>
			<a href="">Why do I need to verify my identity?</a>
		</div>
	);
};

export default HomeContent;