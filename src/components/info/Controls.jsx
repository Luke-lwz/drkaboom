function Controls() {
    return (
        <>
            <span className="text-secondary font-extrabold">Card reveal:</span><br />
            To reveal or hide your card, <b>tap it.</b><br />
            This can be used to card share aswell.
            <br /><span className="text-secondary font-extrabold">See all cards in game:</span><br />
            Click the <b>info icon</b> in the upper right corner of your screen.<br/>
            Now you can see all cards that are distributed among your friends
            <br /><br /><span className="text-secondary font-extrabold">Timer menu:</span> (Host)<br />
            <b>Click the timer</b> to open the menu.<br />
            You now have the following options:
            <ul className="list-disc pl-8">
                <li><b>Pause/Resume</b> game</li>
                <li>End the <b>round</b> prematurely</li>
                <li>End the <b>game</b> prematurely</li>
            </ul>
            <br /><span className="text-secondary font-extrabold">Remote Party Mode</span> (Host)<br />
            <b>DO NOT USE WHEN PLAYING IN PERSON</b><br />
            Enable this and you can virtually and remotely card and color share.<br/>
            This is for lobbies that are playing online rather than in person. (via Discord, Zoom, ...)

        </>
    );
}

export default Controls;