//creacion de la conexion a la base de datos supabase
//utilizando las variables de entorno para mayor seguridad


import { createClient } from "@supabase/supabase-js";


const supabaseUrl = 'https://pvujxburytiwmyfadzdu.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2dWp4YnVyeXRpd215ZmFkemR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3NDU1ODMsImV4cCI6MjA3NjMyMTU4M30.a8soS_SzYOWoSVzkfjb8Y5SbF_KcRlIereuCNxzHbTc';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
