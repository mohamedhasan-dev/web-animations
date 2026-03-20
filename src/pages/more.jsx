import { useNavigate } from "react-router-dom";

const More = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        <section className="w-60 h-65 p-2 border-white border flex flex-col justify-center items-center cursor-pointer" onClick={() => navigate("/stagger")}>
          <div className="w-50 h-55 bg-[url(./assets/bg-img.png)] bg-cover bg-center"></div>
          stagger animation
        </section>
      </div>
    </>
  );
};

export default More;
