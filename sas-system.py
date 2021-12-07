# packages that are needed for the bot
import discord, re, json
from discord.ext import commands
from modules import bot as v
from modules.utils import scamlinks as l

links = l.link1

class AntiScam(commands.Cog):
    def __init__(self, client):
        self.client = client

    @commands.Cog.listener()
    async def on_message(self, message):
        with open("databases/security.json", "r") as f:
            sys = json.load(f)
        antiscam = sys[str(message.guild.id)]["antiscam"]
        
        if antiscam == "Enabled":            
            if links != None and (isinstance(message.channel, discord.channel.DMChannel) == False):
                for bannedWord in links:
                    try:
                        if message.author.guild_permissions.administrator:
                            return

                        if msg_contains_word(message.content.lower(), bannedWord):
                            embed=discord.Embed(
                                title="Security issue banned!", 
                                description=f"A user was banned from this server due to a violation of the Security Guidelines or the Discord ToS!",
                                color=0xed5757
                                )
                            embed.set_thumbnail(url=v.unsafe)
                            embed.set_footer(icon_url=v.unsafe, text="If you think this was a mistake, report it to BobCat Devs")

                            #await message.delete()
                            #await message.author.ban(reason="Sending scam links")
                            await message.channel.send(embed=embed)
                            return
                    except AttributeError:
                        pass
            return

def msg_contains_word(msg, word):
    return re.search(fr'\b({word})\b', msg) is not None

def setup(client):
    client.add_cog(AntiScam(client))
    print("AntiScam has loaded")
