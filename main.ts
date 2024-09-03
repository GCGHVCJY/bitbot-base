input.onButtonPressed(Button.A, function () {
    bitbot.ledRainbow(true, BBArms.Both)
    bitbot.gocm(BBDirection.Forward, 100, 50)
    bitbot.rotatems(BBRobotDirection.Left, 20, 1000)
})
