const Reload = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <button onClick={handleReload}>
      <img
        className="w-[30px] h-[30px]"
        src="https://cdn-icons-png.flaticon.com/256/10695/10695860.png"
      />
    </button>
  );
};

export default Reload;
