"use client"; // error boundaries must be client component

// import "./global.css"

export default function GlobalError() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
            <button
                onClick={() => {
                    // refresh the page
                    window.location.reload();
                }}
                className="bg-blue-50 hover:bg-blue-700 text-white font-bold py-2 px-4">
                Refresh
            </button>
        </div>
    );
}
