const AddedPackages = () => {
  return (
    <div className="flex flex-col gap-9">
      {/* <!-- Input Fields --> */}
      <div className="rounded-sm lg:w-3/4 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-col gap-5.5 p-6.5">
          <form>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Banner Title
              </label>
              <input
                type="text"
                placeholder="Banner Title here"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Banner Info
              </label>
              <input
                type="text"
                placeholder="Banner Info here"
                className="w-full rounded-lg outline-none border-[1.5px] bg-transparent py-3 px-5 font-medium border-blue-500 transition focus:border-primary  dark:bg-form-input"
              />
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Attach file
              </label>
              <input
                type="file"
                className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
              />
            </div>
            <div>
              <input
                className="bg-blue-500 text-md text-white font-medium"
                type="submit"
                value="Save"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddedPackages;
