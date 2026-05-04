https://www.youtube.com/watch?v=Ua__7-x6MWs


# 1:40 the stack is 
- Tanstack START
- Tanstack Router
- Tnastack Query
- Tanstack Table
- React 19
- react compiler
- TS
- tailwind Css and shadcn
- CLerk 
- middleware : to protect secure route and validate server requests
- Firebase 2:08
- posthog
- 2:28 coderabbit

# 4:35 another react framework -TANSTACK-
- we already have *vite* for standard apps
- *Next js* for full stack stuff       
5:00 u still write react components, 
        us till fetching data, u still managing state 
    the diffference is where and how 5:10 the framework decide to execute that code

## 5:20 hydration errors, use client and vendor lockins     
        how tnastakc start actually solves those problems
        -ur components 5:38 renders in the server and hydrate on the browser 
                ready for state and event handler out of the box
                =>no use client on top of ur components files or use server on ur server actions 5:"50
                =>server work happends at ur route level not inside of ur jsx 6:00   

###  6:05 *type safe routing from DB to component*
    - it automatically connects ur DB types on the server straight to ur react code on the FE 6:12

### 6:30 SSR , Streaming, BuiltIn RPCs 6:35

#### 7:35 TanStack Start 

#####     8:15 when a user types in a URL into the browser
                8:40 1-get req from the browser being sent to the server
                        2- that req hits the tanstack running server which is actually running node under the hood
                        3-tanstackStart takes the url, matches it against ur route tree 8:52
                        4- figures out which routes are active for that url 9:00
                        5-now 9:12 starts run the loader - dedicate data fetching function attahced to a specific route
                            Loaders is when u talk to the DB , call ur apis 9:30 
                                they run on the server
                                they run before rendeering and
                                they produce data
                            9:52 once the loader have resolved
                            =>start renders ur react component tree on the server 9:56
                                ->it calls ur root component which render the layout
                                =>normal react rendering running in node instead of a browser
                                =>10:10 output is an html string =>contain ur actual content 10:17
                                =>that html then gets sent to the browser 10:28

###### Navigation to a new route 10:45 with Tanstack router =>the browser never doeas a full page reload

###### Server means the node process that TANSTACK runs not a seperate API server

# Creating  TansStack Start Project
        11:44 tanstackstart.com
    =>        get a START project up and running 12:00
                npx @tanstack/cli@latest create

                13:55 react compiler automatically analyse the code and appply these memoization under the hood

## 15:15 Project Struct
    ultimate-tanstack-start-main/crash-course/src

        16:00 ultimate-tanstack-start-main/crash-course/tsconfig.json
        17:30 ultimate-tanstack-start-main/crash-course/package.json
        18:14 ultimate-tanstack-start-main/crash-course/biome.json

        19:48 ultimate-tanstack-start-main/crash-course/src/router.tsx:
                 create the router tanstack instance

### 23:20 COMPONENTS
    COMPONENTS R just REACT components

#### 25:00 ultimate-tanstack-start-main/crash-course/src/components/SkillCard.tsx
        render the card within our ultimate-tanstack-start-main/crash-course/src/routes/index.tsx
            WE HAVE TO PASS A PROP TO THE CARD FROM THE INDEX.TSX
-    30:25 COMPONENTS IN TANSTACK START ALWAYS RUN IN THE BROWSER
-    30:33 THEY ALSO RUN ON SERVER DURING SSR but with no server caqpabilities
-    all 30:45 *the server work will happen* in the server functions called from *loaders or mutations*

-   31:00 style our components in TANSTACK start
    pure css
    css modules
    *Tailwing use 31:50*
        
### ROUTING in TANSTACK 37:20 everything starts with :
    -FIle BASED ROUTING
    -__root.ts
    -Different index pages

    37:45 create a file where u export some kind of route object
        =>then tanstack will register it automatically

- @ index.tsx we hve: export const Route = createFileRoute("/")({ //38:30 points to the url that this file handles -- home page
- also w ehve the about page ultimate-tanstack-start-main/crash-course/src/routes/about.tsx
- another route ultimate-tanstack-start-main/crash-course/src/routes/contact.tsx : 
           *tanstack will auto create the route automatically and register it for you*

- *Nested Route* 39:25
    ultimate-tanstack-start-main/crash-course/src/routes/skills/new.tsx : *automatic creation*
    40:00 ultimate-tanstack-start-main/crash-course/src/routes/skills/index.ts

- *Dynamic Route* 40:16 
    in TANSTACK f u prefix the file name with a $ 40:55 =>dynmiac route
        ultimate-tanstack-start-main/crash-course/src/routes/skills/$skillId.tsx : *automatically creates it*. 41:18

    42:10 *have more than one dynamic segment*. /users/alice/skills/react-hooks : where both the name and skill name are dynamics too
            =>stored in a route like this */routes/users/$username/skills/$skillId.tsx 42:40*
                ultimate-tanstack-start-main/crash-course/src/routes/users/$username/skills/$skillId.tsx 43:05

-  44:05 maybe ur building a dashboard that needs a side bar => 
            *use of nested layout routes* =>create a special *route.tsx* file within the folder providing a layout for all files inside its directory
                ultimate-tanstack-start-main/crash-course/src/routes/dashboard/route.tsx =>*this route doesnt add ntg to the url*
        45:20 home page of the /dashboard/
            ultimate-tanstack-start-main/crash-course/src/routes/dashboard/index.tsx
            ultimate-tanstack-start-main/crash-course/src/routes/dashboard/skills.tsx
            ultimate-tanstack-start-main/crash-course/src/routes/dashboard/settings.tsx

- 47:35 ultimate-tanstack-start-main/crash-course/src/*routeTree.gen.ts*


### DATA FETCHING 48:05
    inside a regular react app u will write a standard fetch req inside of a use effect hook
        the component mounts
        the hook fires
        and the user stares at a spinning loading wheel
        ==>             *render fetch water fall* 48:35
            1- the browser has to doanload js
            2- parse it
            3-boot up react
            4-render the UI layout
            5-and only then realizes it needs to grab data

#### 48:38 Tansstack start completely eliminites this problem using *ROUTE LOADERS*
        DEDICATED ASYNC FUNC attache didrectly to ur route file 48:52
            - when user click a nrw link =>the touter intercept that link
                =>so before react even attempt to render the next componentn 49:00
                    =>the router fires the loader to grab the data
                    =>so by the time the component actually renders
                        *the data is sitting there waiting*

        this 52:45 loader runs before the components renders
		whtever u return as data in the component is available by useLoadeddata hook

#####        Tanstack makes it even easier 52:58
###### Pending States 53:35 
    show a loading spinner or a skelleton ui     
    ultimate-tanstack-start-main/crash-course/src/routes/index.tsx

###### Error Handling 54:55 

###### handling 404s 57:00

###### 58:20 passing the RIGHT DATA IN FIRST PLACE =>zod validation


##### server function for Fetching data from API requiring keys 59:00
    u cannot put secret keys inside of a loader which is triggered upon user clikc in the browser
###### to fetch the data securely , ur loader must use a server function 59:35 executed strictly on the server
    when u call a server func from ur client code tanstack auto transform that call into a proper http req behing the scenes
        It acts as an *RPC Remote Procedure Call*
                 =>u can execute a func living on a different pc /server exavtly as if it were a normal loal func in ur FE code 1:00:20
                 u dnt have to write any manual fetch req
                      define url endpoints
                      set headers, or parse json responses 1:00:38
###### TRPC 1:00:50  
    this trpc style arch is built natively into the framework via server function 1:01:10
    1:01:25 /Users/macbook/Desktop/JSM/TANSTACK-JSM-29-4-2026/ultimate-tanstack-start-main/crash-course/src/server/pokemon.ts
        where we ll define our secure BE logic

        home page: index.tsx


##### 1:04:15 server function not only for fetching data- alos for MUTATING data 1:04:15 
    creating, updating, deleting ==>Post method 
        define a post method to a server func 1:04:30
        1:06:40 
            ultimate-tanstack-start-main/crash-course/src/routes/FAVORITE.TSX
            1:11:15 save it on the server side   
                we didnt hve to spinn up our own node js server to do that 
                1:11:25 Tanstack Start is is a full stack framweork allowing u to call ur own server funcs- u generate within the same code base folder

##### 1:11:50 API routes vs Server Fncs  
    if server funcs are amazin- why would it need to write traditonal API endpoints? 1:11:59
    there is a 5% chance where server fb do not work and mutate the DB(create-update-delete)
-    *1:12:15 SErver Fncs are strictly designed for ur FE* : SErver Fncs
            to tak to ur BE
-    *But what happens when an Outsire service needs to talk to ur app* : API Endpoint
        *Situations 1:12:30*
        1-when u r *receiving Web hooks*
            1:12:39 a service like Stripe or Github needs a public stable http url to send a post req to when a payment succeeds or a codeBase updates
        2- when u need to return non json data 1:!3:00
            server FNc are expected to return JS objects 1:13:15
            API routes lets u return raw , web standard ressponse object

- when 1:13:27 u need a raw stanard http endpoint TanStak start provides *server routes  *
    1:13:30 Create a public endpoint
        ultimate-tanstack-start-main/crash-course/src/routes/api/hello.ts
            where we ll Develop the API route/endpoint 1:14:10


##### 1:18:50 Metadata & SEO - modifing the static metadata within ur TANSTACK START APP
    TanStack start supoorts SSR 1:9:35
        ultimate-tanstack-start-main/crash-course/src/routes/__root.tsx 1:19:55
        1:20:35 Nested deduplication 1:21:00 
-            *modifing the static metadata within ur TANSTACK START APP*
                ultimate-tanstack-start-main/crash-course/src/routes/about.tsx
------------------------------------------------------------------------------------------------------
1:23:00 
# Clerk 
     https://dashboard.clerk.com/apps/new

# 1:28:30 Style of the app
        skilld-me/skilld-me/src/styles.css

# 1:30:25 layout of our app
    src/components/Navbar.tsx
    import it @ src/routes/__root.tsx above our {children}
    1:32:17

# 1:36:40 Biome extension

# SPEAK AI 1:37:30 WHISPER FLOW

# Git save
    1:40:45 switch over to a new branch 
        git checkout -b dev

# 1:41:15 Home PAGE
        src/routes/index.tsx

##        1:46:30 type.d.ts : types definitions
                interface SkillRecord 

##        1:48:38 src/components/SkillCard.tsx

        Consume it/implement it at index.tsx
        1:50:30 src/lib/dummy-skills.ts
        
-        1:52:18 dive into the  
    *skill card component* 

## 2:06:00 git push

### 2:06:50 CodeRabbit

    src/routeTree.gen.ts only defines the / route. This breaks typed navigation and creates dead links at runtime.


## 2:11:40 Clerk
    
    Step 3 Set your Clerk API keys
    Step 4 Add clerkMiddleware() to your app. 2:13:40
clerkMiddleware() grants you access to user authentication state throughout your app. 
    5 Add <ClerkProvider> to your app

    2:15:49 create a custom sign in and sign up pages
        src/routes/__auth/sign-in.$.tsx
        src/routes/__auth/sign-up.$.tsx
   *Splat Routes* 2:16:29 nd not regular signin sign out routes
  -  2:18:16 modify the navbar so it actually points to these new pages

  ### 2:21:00 PR and merge 

  # 2:22:19 POSTHOG 
    https://us.posthog.com/project/391419/dashboard/1493206
     npx -y @posthog/wizard@latest
     2:25:16 POSTHOG MCP server lets ur AI AGNET queries ur POSTHOG data direclty 
        2:26:00 Events added
    @:32:45 commit at github


# 2:32:55 FIreBASE :DATABASE 
    https://console.firebase.google.com/u/0/
    2:34:00 add the firebase variables

## FIREBASE OFFERS 2:36:26 3 DB ENGINES
    1- 2:36:36 REALTIME DB
    2- cloud firestore no sql document sore similar to mongodb 2:37:00
    3- FireBase Data connect 2:27:27
        uses cloud SQl based on POSTGRES and allows for relational mapping 
        we ll be using it within this course
        2:39:07 *npm i -g firebase-tools* :install the firebase cli
            firebase login

            already existing projects on FIREBASE
        Select a default Firebase project for this directory:
-            instagram-tut-3842a (Instagram-tut)
-            instagram-tut-advance (Instagram-tut-advance)
-            prepwisevbe (PrepWiseVBE)
-            skilled-4d231 (Skilled)

### 2:40:25 install firebase data/SQL connect extension
    now we re ready to start modelling the data for our app
        -identify the entities of the app ur developping 2:40:50
            1-person
            2-actual skill: core asset of the app 2:41:00
        -relationships : between the entities 
            one to many: one user can create many diff skills
            one skills can only belong to one user
####   2:42:05 *dataconnect/schema/schema.gql* : this is where u define ur DB structure

                mkdir -p ~/.cache/firebase
                sudo chown -R macbook ~/.cache/firebase
                chmod -R u+rwX ~/.cache/firebase

                firebase emulators:start --project skilled-4d231
                # or
                npx -y firebase-tools@latest emulators:start --project skilled-4d231

                npx firebase-tools@latest dataconnect:sql:migrate
                firebase deploy

#####    2:45:00 by pressing on add data/ read data on both user and skill tables
             @dataconnect/schema/schema.gql , files are generated:
-        we add the skill insert mutation: dataconnect/Skill_insert.gql
-        reading the skill table : dataconnect/Skill_read.gql
-        we add the user insert mutation:  dataconnect/User_insert.gql
-        reading the user table :dataconnect/User_read.gql

##### 2:46:10 after those files creation, we run the. deployment command 
-   npx -y firebase-tools@latest deploy --only dataconnect
    

-    2:46:40 firebase data connect 2:46:40 @ .gitignore :reduce the number of files to push opver to githubs

- 2:47:00 check the console schema
https://console.firebase.google.com/u/0/project/skilled-4d231/dataconnect/locations/us-east4/services/skilled-4d231-service/schema

Clerk: 
https://dashboard.clerk.com/apps/app_3D83DAF5aCsaoOUTU5NhZLgOWnJ/instances/ins_3D83DGzUvLLiCgCeg2juEuRm4BJ/users
users/ahmad wehbe/copy the json text file 2:47:30 

*(RUNNING MUTATIONS)*
2:48:00 add the user manually using the dataconnect/User_insert.gql
    =>run production project
2:50:00 add the skills manually using the dataconnect/Skill_insert.gql

*2:50:26 RUN QUERIES DIRECTLY FROM DB*
- dataconnect/User_read.gql: U WILL BE ABLE TO DIRECTLY QUERY UR DB
- dataconnect/Skill_read.gql 2:50:50 U CAN SEE THE SKILLS THAT HVE BEEN ADDED TO OUR DB
 
*See data in. the web console 2:50:58 @*
    https://console.firebase.google.com/u/0/project/skilled-4d231/dataconnect/locations/us-east4/services/skilled-4d231-service/data

*Schema*
    https://console.firebase.google.com/u/0/project/skilled-4d231/dataconnect/locations/us-east4/services/skilled-4d231-service/schema

*RECAP 2:51:20 we essentially created the data struct of our entire app*
    
### 2:51:35 use the firebase SDK to fetch data
        Write a couple of queries and call tyhem on the UI side to display to dispaly real data and remove the dummy data
            =>head to our code base
-                dataconnect/example/connector.yaml
                =>rename the folder to *connectors *

       *queries creation* :
            GetSkills() 2:52:15
-        2:54:55  *dataconnect/dataconnect.yaml* 
    and *point it* to our new folder dataconnect/connectors/queries.gql
            connectorDirs: ["./connectors"] 2:55:10
- *Deploy of this query*  2:55:16
    firebase login                                                      
        Already logged in as ahmad.vbe@gmail.com

    firebase deploy --only dataconnect
       *=>when u deploy ur actually registering ur .gql files on the firebase server* 
    
-    *2:56:00 TS sdk* 
    firebase dataconnect:sdk:generate
        =>defines the types and get the type for the full queries themselves

- 2:56:50 *firebase config file*
    src/lib/firebase.ts
    2:59:25 now we re ready to define a tanstack server func that fetch the skills form the DB
        src/routes/index.tsx 2:59:40

3:07:55 Github push