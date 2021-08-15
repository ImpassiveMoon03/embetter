# Embetter 
The embed fabrication bot!
## About the Project
Embetter is a [Node.js](https://node.js.org/) bot created to allow people to fabricate embeds using JSON data
## Prerquisites
Your machine must run Node.js<br/>
To see if your machine has Node installed open the shell and type the following command:
```
node -v
```
After making sure Node is installed, make an application in the [Discord Develper Portal](https://discord.com/developers/applications)

After making an application and adding a bot you can now clone the repo
## Setting Up the Project
Open your virtual machine to the directory where you want to clone the project, then type the following command
```
git clone https://github.com/ImpassiveMoon03/embetter
cd embetter
```
Then run the following to get set up
```
npm install
npm run setup
```

After running setup, enter the .env file created by the script and replace "DISCORD_TOKEN" with your bot's token<br/>
After adding the token, you can uncomment the slash command initialization inside of the ready event to enable slash commands
## Author
[Robert Offord](https://github.com/ImpassiveMoon03)
## License [MIT](https://opensource.org/licenses/MIT)
Copyright 2021 Robert Offord<br/><br/>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br/><br/>
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br/><br/>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.