generateJson() {
	if [[ $1 == *"*" ]]; then return; fi
	local filename=${1%\.*}
	local desc=${filename##*/}
	local desc=${desc:3}
	local desc=${desc//_/" "}
	local jsfile=${filename}.json
	if [[ -f $jsfile ]]; then return; fi
	printf "{\n\t\"image\":\"/raw/%s\",\n\t\"text\":\"%s\"\n}\n" $1 "$desc" >> $jsfile
}

generateJsonLink() {
	if [[ $1 == *"*" ]]; then return; fi
	local filename=${1%\.*}
	local desc=${filename##*/}
	local desc=${desc:3}
	local desc=${desc//_/" "}
	local jsfile=${filename}.json
	if [[ -f $jsfile ]]; then return; fi
	printf "{\n\t\"image\":\"/raw/%s\",\n\t\"text\":\"%s\",\n\t\"link\":\"\"\n}\n" $1 "$desc" >> $jsfile
}

generateJsonDemo() {
	local projectPath=$1
	local project=${1}
	local jsfile=${projectPath}LINK/01-demo.json
	if [[ ! -d ${project}demo ]]; then return; fi 
	if [[ -f $jsfile ]]; then return; fi
	printf "{\n\t\"image\":\"\",\n\t\"text\":\"demo\",\n\t\"link\":\"/demo/%sindex.html\"\n}\n" $project >> $jsfile 
}

for f in */; do
	for img in ${f}LINK/*; do 
		generateJsonLink $img
	done
	for img in ${f}SCREEN/*; do 
		generateJson $img
	done
	for img in ${f}TECH/*; do 
		generateJson $img
	done

	generateJsonDemo $f
done
