$(function () {
    const styles = [
        {
            name: "None",
            value: "none"
        },
        {
            name: "Dark Blue",
            value: "dark-blue"
        },
        {
            name: "Old Base",
            value: "old-base"
        }
    ];
    const styleSelect = $("#styleSelect");
    let currentStyle = styles[0].value;

    styles.forEach(style => {
        $("<option>").val(style.value).text(style.name).appendTo(styleSelect);
    });

    styleSelect.change(() => {
        const body = $(document.body)
        const newStyle = styleSelect.val();
        body.removeClass(currentStyle);
        body.addClass(currentStyle = newStyle);
    });
});