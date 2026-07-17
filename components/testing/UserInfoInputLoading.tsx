import LoadingCircles from "../animation/LoadingCircles";

function UserInfoInputLoading() {

  return (
    <div className="flex flex-col justify-between items-center gap-10">
      <span className="text-lg text-gray-500 tracking-wider">
        Processing submission
      </span>
      <LoadingCircles />
    </div>
  )
}

export default UserInfoInputLoading