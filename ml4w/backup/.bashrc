#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias grep='grep --color=auto'
PS1='[\u@\h \W]\$ '

#to enable getnf
#export PATH=~/.local/bin:$PATH

#to enable Carneades
#export PATH=~/go/bin:$PATH

#to enable starship
eval "$(starship init bash)"

#to enable biber
#export PATH=~/usr/bin/site_perl:~/usr/bin/vendor_perl:~/usr/bin/core_perl:$PATH

#to enable protege
export JAVA_HOME=/usr
export PATH=$JAVA_HOME/bin:$PATH


[ -f "/home/urielsantiago/.ghcup/env" ] && . "/home/urielsantiago/.ghcup/env" # ghcup-env
