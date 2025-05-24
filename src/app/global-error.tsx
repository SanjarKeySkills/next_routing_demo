"use client"; // error boundaries must be client component
// import "./global.css"

export default function GlobalError() {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button
                onClick={() => {
                    // refresh the page
                    window.location.reload();
                }}>
                Refresh
            </button>
        </div>
    );
}
