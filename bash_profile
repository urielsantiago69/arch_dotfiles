#
# ~/.bash_profile
#

[[ -f ~/.bashrc ]] && . ~/.bashrc

# enable japanese through fcitx5-im
#export GTK_IM_MODULE=fcitx
#export QT_IM_MODULE=fcitx
export XMODIFIERS=@im=fcitx

#to enable getnf

export PATH=~/.local/bin:$PATH

#to enable Carneades
export PATH=~/go/bin:$PATH

#to enable biber
#export PATH=~/usr/bin/site_perl:~/usr/bin/vendor_perl:~/usr/bin/core_perl:$PATH
