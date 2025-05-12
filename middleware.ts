// middleware.ts
import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  let response = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // Opcional: obtener el usuario autenticado
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Puedes agregar lógica adicional aquí, por ejemplo, redirigir si el usuario no está autenticado

  return response;
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'], // Ajusta las rutas según tus necesidades
};
