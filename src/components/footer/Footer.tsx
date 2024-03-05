import myLogo from '../../assets/mylogo.png';

function Footer() {
  return (
    <div className="py-2 w-full relative bg-ghost-white flex flex-col gap-1  items-center">
      <div className="absolute h-14 w-14 left-3 ">
        <img
          src={myLogo}
          alt="Jagadish Shrestha"
          className="h-full w-full object-cover"
        />
      </div>
      <p className="text-sm">@2023 copyright</p>
      <p className="text-sm">Jagadish Shrestha</p>
      <p className="text-sm">Shankharapur-6,Kathmandu,Nepal</p>
    </div>
  );
}

export default Footer;
