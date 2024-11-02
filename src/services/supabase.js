import { createClient } from "@supabase/supabase-js";

const projectURL = "https://ljroxogsifnbeofppyii.supabase.co";
const projectAPI =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxqcm94b2dzaWZuYmVvZnBweWlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMzIxMjMsImV4cCI6MjA0MjcwODEyM30.a2E8aOE3IiNbs_ts9-Zbl6_qkGAoGUiH_W4dNFq0u-8";

const supabase = await createClient(projectURL, projectAPI);

async function getPosts() {
  const { data } = await supabase.from("blog-posts").select("*").range(45, 48);
  return data;
}

export default data;
