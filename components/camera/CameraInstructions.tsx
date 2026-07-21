
function CameraInstructions({ textColor }: {textColor: string}) {
    return (
        <section className="absolute bottom-10 sm:bottom-35 left-1/2 -translate-x-1/2 text-center">
            <p className={`text-sm sm:mb-4 font-normal leading-6 text-${textColor}`}>
                TO GET BETTER RESULTS MAKE SURE TO HAVE
            </p>
            <div className={`flex justify-center gap-8 text-xs leading-6 text-${textColor}`}>
                <p className="flex flex-col sm:flex-row sm:gap-1.5 justify-between items-center">
                    <span>◇</span>
                    <span>NEUTRAL</span>
                    <span>EXPRESSION</span>  
                </p>
                <p className="flex flex-col sm:flex-row sm:gap-1.5 justify-between items-center">
                    <span>◇</span>
                    <span>FRONTAL</span>
                    <span>POSE</span>  
                </p>
                <p className="flex flex-col sm:flex-row sm:gap-1.5 justify-between items-center">
                    <span>◇</span>
                    <span>ADEQUATE</span>
                    <span>LIGHTING</span>  
                </p>
            </div>
        </section>
    )   
}

export default CameraInstructions